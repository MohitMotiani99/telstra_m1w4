class Ticket{
    source:string
    destination:string
    cost:number

    printdetails(){
        console.log('printing ticket details')
    }
}
class WaitingTicket extends Ticket{
    waitinglist:number

    printdetails(){
        console.log('waiting ticket details')
    }
}
class ConfirmedTicket extends Ticket{
    seatno:number

    printdetails(){
        console.log('confirmed ticket details')
    }
}
class CancelledTicket extends ConfirmedTicket{
    refundamount:number

    // printdetails(){
    //     console.log('cancelled ticket details')
    // }
}

var t:Ticket=new CancelledTicket()

t.printdetails()