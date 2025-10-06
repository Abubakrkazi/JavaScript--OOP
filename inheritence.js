class Father{
    num1=23;
    num2=59;
    addNumber (){
        let sum= this.num1+this.num2;
        console.log(`The sum is: ${ sum}`);
    }

}
    class Son extends Father{

    }
 let ObjSon=new Son();
 ObjSon.addNumber();