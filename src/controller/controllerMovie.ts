import { Router, Request, Response, NextFunction } from 'express';
import modelMovie, { IMovie } from '../model/modelMovie';
import { isNullOrUndefined } from 'util';

export class ControllerMovie {
    constructor() {
    }

    // ***
    // * Retourne la liste de movies.
    // * http://localhost:3020/api/movies
    // ***
    public async listMovie(req: Request, res: Response, next: NextFunction) {
        try {
            // Récupérer tous les films triés par title.
            console.log("Entrer dans cette fonction : listeMovie");
            const allMovies: IMovie[] = await modelMovie.find().sort({ title: 1 });
            res.status(200).render('listMovies', {
                allMovies: allMovies
            });
        } catch (error) {
            console.log(error);
        }
    }

    public createMovie(req: Request, res: Response, next: NextFunction) {
        try {
            if (req.method === 'GET') {
                res.status(200).render('createMovie', {});
            } else if (req.method === 'POST') {
                res.status(200).send(
                    'readMovie - Insérer un movie dans le db.');     
            }
        } catch (error) {
            console.log(error);
        }
    }

    // ***
    // * Retourne un movie.
    // * Méthode    : GET.
    // * Req        : req.param.idMovie.
    // ***
    public readMovie(req: Request, res: Response, next: NextFunction) {
    try {
        res.status(200).send(
            'readMovie - retourne un movie dans le db.'
        );
    } catch (error) {
    }
}


    public updateMovie(req: Request, res: Response, next: NextFunction) {
    try {
        res.status(200).send(
            'updateMovie - update un movie dans le db'
        );
    } catch (error) {
    }
}

    public deleteMovie(req: Request, res: Response, next: NextFunction) {
    try {
        res.status(200).send(
            'deleteMovie - deleteMovie un movie dans le db'
        );
    } catch (error) {
    }
}
}

// Create : POST www.example.com/customers
// Read : GET www.example.com/customers/3814
// Update : PUT www.example.com/customers/3814
// Destroy : DELETE www.example.com/customer/3814
// res.status(200) // Ok
// res.status(201) // Created
// res.status(204) // No content
// res.status(400) // Bad request
// res.status(401) // Unauthorized
// res.status(403) // Forbidden
// res.status(404) // Not found
// res.status(500) // Server error