class RegularCustomer implements Customer{
    email: string="peter@mail.com";
    name: string="peter";
    address: string="jojo villa";
    age: number;
    display: () => void;
    dplay(): string {
        return "details are: "+this.name+ " "+this.address+" "+this.email
        throw new Error("Method not implemented.");
    }
    
}

    console.log(new RegularCustomer().dplay())