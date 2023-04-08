import ErrorMessages from './ErrorMessages';
import './style.css'

function WindowManager(){

  // let isLauncherOpen = false;
  let totalWindows = 0;

  let taskbar = document.createElement("div") as HTMLDivElement
  taskbar.classList.add("taskbar", "shadow")
  taskbar.innerHTML = `
  <div class="taskbar shadow">
    <div class="start btn shadow"><i><img src="/windows98-error-message/windows_icon.png"></i>start</div>
    <div class="taskbar-shortcuts">
      <div class="separator"></div>
      <i><img src="/windows98-error-message/msie.png"></i>
      <i><img src="/windows98-error-message/msn.png"></i>
      <i><img src="/windows98-error-message/desktop_old.png"></i>
      <i><img src="/windows98-error-message/display_properties.png"></i>
    </div>
    <div class="open-apps"></div>
    <div class="clock">
      <div class="separator"></div>
    </div>
  </div>
  `;

  document.querySelector<HTMLDivElement>('#app')!.appendChild(taskbar)

  function openWindow(){
    const maxWindows = ErrorMessages.length;
    if(totalWindows < maxWindows){
      totalWindows = totalWindows + 1
      console.log("total windows: " + totalWindows)
      
      document.querySelector<HTMLDivElement>('#app')!.appendChild(Window(totalWindows).element);
      let previousWindow = document.querySelector<HTMLDivElement>(`#window-id${totalWindows-1}`) as HTMLDivElement
      let previousWindowCloseBtn = document.querySelectorAll<HTMLDivElement>(`#window-id${totalWindows-1} .btn.close`)
      let currWindowCloseBtn = document.querySelectorAll<HTMLDivElement>(`#window-id${totalWindows} .btn.close`)
      
      let previousWindowRebootBtn = document.querySelectorAll<HTMLDivElement>(`#window-id${totalWindows-1} .btn.redirect`)
      let currWindowRebootBtn = document.querySelectorAll<HTMLDivElement>(`#window-id${totalWindows} .btn.redirect`)


      if(previousWindow){
        previousWindow.classList.remove("front")
      }
      if(previousWindowCloseBtn){
        previousWindowCloseBtn.forEach((e: HTMLDivElement)=>{
          e.onclick = ()=>{}
        })
      }
      if(currWindowCloseBtn){
        currWindowCloseBtn.forEach((e: HTMLDivElement)=>{
          e.onclick = openWindow
        })
      }
      if(previousWindowRebootBtn){
        previousWindowRebootBtn.forEach((e: HTMLDivElement)=>{
          e.onclick = ()=>{}
        })
      }
      if(currWindowRebootBtn){
        currWindowRebootBtn.forEach((e: HTMLDivElement)=>{
          e.onclick = redirect
        })
      }
    }
    
  }
  openWindow()

  function redirect(){
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = ""
    setTimeout(()=>{
      window.location.href = "https://arthur-matias.github.io/";
    }, 2000)
  }

  function Window(index: number){

    const newWindow = document.createElement("div") as HTMLDivElement;
    function getOffset(){
      let offsetLeft = 0, offsetTop = 0;
      while(offsetLeft<10 || offsetLeft > window.innerWidth - 10 - (30*16)){
        offsetLeft = Math.random() * window.innerWidth
      }
      while(offsetTop<10 || offsetTop > window.innerHeight - (30*10)){
        offsetTop = Math.random() * window.innerHeight
      }
      return [offsetLeft, offsetTop]
    }
  
    const offset = getOffset()
    newWindow.style.left = offset[0] + "px";
    newWindow.style.top = offset[1] + "px";
    newWindow.classList.add("window", "shadow", index === totalWindows?"front":"back")
    newWindow.id = `window-id${index}`
    newWindow.innerHTML = `
    <header>
      <div class="title">
        Windows - Warning!
      </div>
      <div id="close${index}" class="btn close shadow">
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </header>
    <section>
      <div class="message">
        <i><img src="/windows98-error-message/msg_error.png"></i>
        <p>${ErrorMessages[index]}</p>
      </div>
      <div class="options">
        <div class="btn close shadow">retry</div>
        <div class="btn redirect shadow">reboot</div>
        <div class="btn close shadow">cancel</div>
      </div>
    </section>
    `
    
    return{
      element: newWindow,
    }
  }
}
WindowManager();

