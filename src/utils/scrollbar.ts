// 修改 Window 系统浏览器的滚动条的默认样式，美化效果
void (function styleTheWindowsScrollbar() {
  const IS_WINDOWS = navigator.platform.indexOf('Win') > -1
  if (IS_WINDOWS) {
    const css = `
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: rgba(92, 110, 130, 0.6);
        border-radius: 3px;
      }
      
      ::-webkit-scrollbar-track {
        background: none;
      }
      
      ::-webkit-scrollbar-track-piece {
        opacity: 0;
      }
    `
    const head = document.head || document.getElementsByTagName('head')[0]
    const style = document.createElement('style')
    head.appendChild(style)
    style.innerText = css
  }
})()
