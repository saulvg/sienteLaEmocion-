const getDB = require('../../database/getDB');

const getListEntry = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        // Obtenemos los posibles query params.
        //NOSOTROS VAMOS A DAR LA OPCION DE CAMBIAR EL ORDEN DEL FILTRO
        const { category, price1, price2, date, createdAt, votes } = req.query;

        // Variable donde almacenaremos las entradas.
        let experiences;

        // Si alguno de los filtos esta activado.

        if (category || (price1 && price2) || date || createdAt || votes) {
            [experiences] = await connection.query(
                `
                SELECT 
                experiences.id, 
                experiences.createdAt, 
                experiences.id_user,
                experiences.capacity, 
                experiences.price, 
                experiences.date, 
                experiences.city, 
                experiences.street, 
                experiences.number, 
                experiences.postalCode, 
                experiences.longitude, 
                experiences.latitude, 
                experiences.text_1, 
                experiences.text_2, 
                experiences.text_3, 
                experiences_category.name AS category,
                company.name AS company,
                AVG(IFNULL(votes.vote, 0)) AS votes_entry 
            FROM experiences
            LEFT JOIN experiences_category ON (experiences.id_experiences_category = experiences_category.id)
            LEFT JOIN company ON (experiences.id_company= company.id)
            LEFT JOIN votes ON (experiences.id = votes.id_experiences)
            WHERE 
                experiences_category.name = ? OR
                (experiences.price >= ? AND experiences.price <= ?) OR
                experiences.date LIKE ? 
            GROUP BY experiences_category.id, company.id, experiences.id;  
                    `,
                [`${category}`, price1, price2, `%${date}%`, votes]
            );
        } else {
            [experiences] = await connection.query(
                `
                SELECT 
                    experiences.id, 
                    experiences.createdAt, 
                    experiences.id_user, 
                    experiences.capacity, 
                    experiences.price, 
                    experiences.date, 
                    experiences.city, 
                    experiences.street, 
                    experiences.number, 
                    experiences.postalCode, 
                    experiences.longitude, 
                    experiences.latitude, 
                    experiences.text_1, 
                    experiences.text_2, 
                    experiences.text_3, 
                    experiences_category.name AS category,
                    company.name AS company,
                    AVG(IFNULL(votes.vote, 0)) AS votes_entry
                FROM experiences
                LEFT JOIN experiences_category ON (experiences.id_experiences_category = experiences_category.id)
                LEFT JOIN company ON (experiences.id_company= company.id)
                LEFT JOIN votes ON (experiences.id = votes.id_experiences)
                GROUP BY experiences_category.id, company.id, experiences.id
                ORDER BY createdAt desc

                    `
            );
        }

        res.send({
            status: 'ok',
            data: {
                experiences,
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = getListEntry;