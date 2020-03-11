
//LIST CONTROLLER
var listControl=(function(){
var items=function(item){
    this.item=item;
}
var data={
    des:[]
};

return{
    addItem:function(item){
        
        data.des.push(item);
        console.log(data+"ddd");
    },
    
}

})();


//UI CONTROLLER
var UIControl=(function(){
    var DOMstring={
        iconButton:'.add__btn',
        itemDescrip:'.add__description'
    }

    return{
        getInput:function(){
            return{
            description:document.querySelector(DOMstring.itemDescrip).value
            }
        },
        getDOMstring:function(){
            return DOMstring;
        }
    }
})();


//APP CONTROLLER
var controller=(function(lCtrl,UICtrl){

var setupEventListener=function(){
    var DOM=UICtrl.getDOMstring();
    document.querySelector(DOM.iconButton).addEventListener('click',ctrlAddItem);
}

var ctrlAddItem=function(){
var input=UICtrl.getInput();
lCtrl.addItem(input.description);
console.log(input.description);

}

return{
    init:function(){
        console.log("Application is started");
        setupEventListener();
    }
};

})(listControl,UIControl);

controller.init();