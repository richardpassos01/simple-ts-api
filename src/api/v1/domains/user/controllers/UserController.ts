import errors from './../../../../../common/errors/error-helper';

const mongoose = require('mongoose');

let database: any;
let userSchema: any;

class UserController {
    async connectDatabase() {
        database = database || mongoose.connect('mongxodb+srv://usuario:senha@cluster0.go3jm.mongodb.net/development?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        return database;
    }

    async createUserSchema(database: any) {
        if (userSchema) {
            return;
        }

        userSchema = new database.Schema({
            name: String
        }, {
            timestamps: true
        });

        database.model('User', userSchema);
    }

    async getUSer() {
        try {
            const database = await this.connectDatabase();

            await this.createUserSchema(database);

            const {
                User
            } = database.models;

            const users = User.find();

            return users;
        } catch {
            throw errors.generic.notFound();
        }
    };

    async createUSer({ name }: { name: String }) {
        try {

            const database = await this.connectDatabase();

            await this.createUserSchema(database);

            const {
                User
            } = database.models;

            const user = new User({
                name
            });

            return user.save();
        } catch {
            return errors.generic.unprocessableEntity();
        }
    };

    async updateUser({ id }: any, { name }: { name: String }) {
        try {
            const database = await this.connectDatabase();

            await this.createUserSchema(database);

            const {
                User
            } = database.models;

            return User.update({
                _id: id
            }, {
                name
            });
        } catch {
            return errors.generic.unprocessableEntity();
        }
    };

    async deleteUser({ id }: any) {
        try {
            const database = await this.connectDatabase();

            await this.createUserSchema(database);

            const {
                User
            } = database.models;

            return User.deleteOne({
                _id: id
            });
        } catch {
            return errors.generic.unprocessableEntity();
        }
    };
};

export default UserController;