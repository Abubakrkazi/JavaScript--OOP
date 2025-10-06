class Father{
    static greatFather(){
        return 'Hello, I am the Father';
    }
}
 class Son extends  Father{
    static greatChild(){
        return 'Hello, Iam the Son';
    }
 }
 console.log(Son.greatChild());