import { BaseDB } from "./data/BaseDB"

export class Migrations extends BaseDB {
    public static async createTables(): Promise<void> {
        Migrations.connection.raw(`
            CREATE TABLE IF NOT EXISTS ${BaseDB.tableClients} (
                id VARCHAR(255) primary key,
                name varchar(255) unique
            );
        
            CREATE TABLE IF NOT EXISTS ${BaseDB.tableProducts} (
                id VARCHAR(255) primary key,
                name varchar(255),
                price float ,
                qty_stock INT
            );
        
            CREATE TABLE IF NOT EXISTS ${BaseDB.tableOrders} (
                id VARCHAR(255) primary key,
                order_date DATE,
                delivery_date DATE,
                qty int,
                fk_client VARCHAR(255),
                fk_product VARCHAR(255) ,
                FOREIGN KEY (fk_client) REFERENCES ${BaseDB.tableClients} (id),
                FOREIGN KEY (fk_product) REFERENCES ${BaseDB.tableProducts} (id)
            );

            INSERT INTO ${BaseDB.tableProducts} VALUES 
                ('1' , 'Tomate Italiano', 7.99 , 700),
                ('2', 'Couve Flor Bandeja 250G', 7.99, 500),
                ('3', 'Repolho Roxo Orgânico Embalagem 350G',  6.99, 300),
                ('4', 'Couve Kale Orgânica  150G',  6.99 , 200),
                ('5', 'Banana Nanica' , 7.99, 500),
                ('6', 'Uva Crimson 450G Bd',9.98, 600),
                ('7', 'Kiwi Importado 30/36',19.98, 600),
                ('8', 'Mamão Formosa',12.99, 760),
                ('9', 'Manga Palmer Kg' ,5.99, 760),
                ('10', 'Cranberries Pacote 70G',19.98, 600),
                ('11', 'Goiaba Vermelha kg',14.98, 60),
                ('12', 'Caju Bandeja 300G',14.90, 490),
                ('13', 'Ameixa Seca com Caroço 180G', 12.90, 80),
                ('14', 'Coco Seco Kg', 9.98, 600),
                ('15', 'Detergente Ypê Clear 500Ml', 1.99, 565),
                ('16', 'Agua Sanitaria Candura 2L', 6.49, 78),
                ('17', 'Limpador Perfumado Veja Aroma Sense Alegria 500Ml', 9.99, 80),
                ('18', 'Amaciante Downy Brisa do Verão 500Ml' , 13.99, 207),
                ('19', 'Batata Frita Lisa Sal e Vinagre Lays 80G ', 9.99, 29),
                ('20', 'Sopa de Batata com Carne Vono Ajinomoto 18G', 3.99, 80),
                ('21', 'Antisséptico Bucal Listerine Anticáries Zero Álcool 500Ml', 23.99,50),
                ('22', 'Escova Dental Colgate Classic Long Macia', 6.99,60),
                ('23', 'Toalha Umedecida Johnsons Baby Limpeza Suave Embalagem 44 Un', 10.99,80),
                ('24', 'Fanta Guaraná 350Ml', 3.99, 50),
                ('25', 'Molho Shoyu Satis Suave 150Ml', 4.29, 70),
                ('26', 'Sabonete Barra Antibactericida Carvão Detox Envoltório Protex 85G',3.29, 89),
                ('27', 'Desodorante Antitranspirante Rexona sem Perfume 50Ml', 11.99,208),
                ('28', 'Suco Del Valle 100% Laranja 1L', 9.99, 456),
                ('29', 'Biscoito Recheado Milkshake de Morango Oreo 90G', 3.99, 456),
                ('30', 'Cerveja Duplo Malte Puro Malte Br',3.99,500);
        `)
            .then(() => {
                console.log('Tables created.')
                console.log(`${BaseDB.tableProducts} populated.`)
            })
            .catch((error: any) => console.log(error.sqlMessage || error.message))
            .finally(() => {
                BaseDB.connection.destroy()
            })
    }
}

Migrations.createTables()