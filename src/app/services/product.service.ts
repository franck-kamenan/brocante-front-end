import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private _client: HttpClient) { }
    public getAll(): Observable<Product[]> {

        return this._client.get<Product[]>("http://localhost:8080/product");

        // return <Observable<Product[]>> this._client.get("http://localhost:8080/product");
        // return this._client.get("http://localhost:8080/product") as Observable<Product[]>;
    }

    public getOne(id: number): Observable<Product> {

        // return this._client.get<Product>("http://localhost:8080/product/" + id);

        // return this._client.get<Product>("http://localhost:8080/product", {
        // params: {
        // "id": id
        // }
        // });

        return this._client.get<Product>("http://localhost:8080/product?id=" + id);
    }
}