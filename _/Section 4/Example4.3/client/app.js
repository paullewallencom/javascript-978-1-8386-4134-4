import {UsersService} from './services/users-service';

export function app(userService) {
    return {
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
                let deletedUser;
                return this.userService.delete(id).then(user => {
                    deletedUser = user;
                    return this.refresh();
                }).then(() => {
                    return deletedUser;
                });
            }
        },
        created: function() {
            this.userService = userService
            return this.refresh();
        }
    }
}