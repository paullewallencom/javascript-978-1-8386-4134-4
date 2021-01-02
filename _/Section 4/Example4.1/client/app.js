import {UsersService} from './services/users-service';

export const app = {
    data: {
        users: [],
        userService: null,
        user: {
            name: "",
            username: "",
            email: ""
        }
    },
    methods: {
        save: function() {
            return this.userService.create(this.user).then(() => {
                return this.refresh();
            })
        },
        refresh: function() {
            return this.userService.findAll().then(users => {
                this.users = users;
            });
        },
        remove: function(id) {
            return this.userService.delete(id).then(() => {
                this.refresh();
            })
        }
    },
    created: function() {
        this.userService = new UsersService();
        this.refresh();
    }
}