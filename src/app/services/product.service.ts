import { Injectable, EventEmitter } from '@angular/core';

@Injectable()

export class ProducService {

    total$ = new EventEmitter<number>();
    total : number;
	
    public setTotal(total : number) {
		this.total = total;
		this.getTotal();
	}
    
	public getTotal() {
		this.total$.emit(this.total)
	}
	

}