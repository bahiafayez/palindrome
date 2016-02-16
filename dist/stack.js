//(function(){
  var Stack = function () {
    var obj = {};
    var _storage = [];
    var _boxHeight = 40;
    var _top = -1;
    var _domLimit = 12;

    obj.push = function(value){
      _storage[++_top]=value;
    }

    obj.pop = function(){
      if(_top >= 0)
        return _storage[_top--];
    }

    obj.size = function(){
      return _top+1;
    }

    obj.canPush = function(){
      return obj.size() < _domLimit;
    }

    obj.updateTop = function(){
      var index = obj.size();
      var elem = $("#top")
      elem.animate({"bottom": index*_boxHeight});
    }

    obj.data = function(){
      return _storage
    }

    obj.pushDOM = function(value){
      obj.push(value);
      var index = obj.size()-1;
      obj.updateTop();
      var elem = $("<div class='box' id='"+index+"'>"+value+"</div>")
      elem.css("bottom", index*_boxHeight);
      $("#stack").append(elem);
      $("#popped").parent().fadeOut();
      elem.fadeIn();
    }

    obj.popDOM = function(){
      var pop = obj.pop();
      obj.updateTop();
      var elem = $("#stack").children("#"+obj.size());
      $("#popped").text(pop);
      $("#popped").parent().fadeIn();
      elem.fadeOut(300, function(){
        this.remove();
      });
    }

    // renders the whole stack
    obj.render = function(){
      $("#stack").empty();
      _storage.forEach(function(e,i){
        var elem = $("<div class='box'>"+e+"</div>")
        elem.css("bottom", i*20);
        $("#stack").append(elem);
      });
    }

    return obj;
  };

  var myStack = Stack();

  $("#push").click(function(){
    var pushValue = $("#value").val();
    if(pushValue && myStack.canPush()){
      myStack.pushDOM(pushValue);
      $("#value").val("");
    }
  })

  $("#pop").click(function(){
    myStack.popDOM();
  })

//})();