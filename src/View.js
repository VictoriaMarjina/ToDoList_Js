class View {
  constructor() {
      this._bodyTasks = null;
      this._entryText = null;
      this._addTaskButton = null;
      
      this.init();
  }
  init = () => {
      this._bodyTasks = document.getElementById("myOL");
      this._entryText = document.getElementById("myInput");
      this._addTaskButton = document.getElementById('add');
      this._addTaskButton.addEventListener('click', this.createTask);
  };

  getValue = () => this._entryText.value;

  createTask = () => {
      const value = this.getValue();
      let liLast = document.createElement("Li");
      let t = document.createTextNode(value);
      liLast.appendChild(t);
      if (value === '') {
      alert("Please, write something!");
      } else {
        this._bodyTasks.appendChild(liLast);
      }
      this.clearInputValue();
      let myNodelist = document.getElementsByTagName("Li");
      for (let i = 0; i < myNodelist.length; i++) {
        let span = document.createElement("taskSpan");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
      }
      for (let i = 0; i < close.length; i++) {
          close[i].onclick = function() {
              let div = this.parentElement;
              div.style.display = "none";
          }
      };
      let closeButton = document.getElementsByClassName("close");
      for (let i = 0; i < closeButton.length; i++) {
      closeButton[i].onclick = function() {
          let div = this.parentElement;
          div.style.backgroundColor = "darkgray";
          div.style.color = "white";
      }
    }
  };

  clearInputValue = () => {
      document.getElementById("myInput").value = "";
  };
}
    
new View();
