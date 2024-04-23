import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUsers(): {
        username: string;
        email: string;
    }[];
    getUser(sortByDesc: boolean): {
        username: string;
        email: string;
    }[];
    getUsersPosts(): {
        username: string;
        email: string;
        posts: {
            id: number;
            title: string;
        }[];
    }[];
    getUsersPostsComments(): {
        id: number;
        title: string;
        comments: any[];
    }[];
    createUser(userData: CreateUserDto): void;
    getUserById(id: number): {
        id: number;
        username: string;
        email: string;
    };
    updateUser(userData: CreateUserDto): {};
    deleteUser(id: number): {};
}
