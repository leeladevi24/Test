import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
    info1: string[] = ["Name1", "E1", "a1@a.com"]
    info2: string[] = ["Name2", "E2", "a2@a.com"]
    info3: string[] = ["Name3", "E3", "a3@a.com"]

    getinfo1(): string[]{
      return this.info1
    }

    getinfo2(): string[]{
      return this.info2
    }

    getinfo3(): string[]{
      return this.info3
    }
    
    constructor() {   }
}
