export namespace nsp{
    export class discount{
        markedp:number
        disc:number
        constructor(markedp:number,disc:number){
            this.markedp=markedp
            this.disc=disc
        }
        calcprice():number{
            return this.markedp-this.disc
        }
    }
    export class triangle{
        base:number
        ht:number
        constructor(base:number,ht:number){
            this.base=base
            this.ht=ht
        }
        area():number{
            return 0.5*this.base*this.ht
        }
    }
}