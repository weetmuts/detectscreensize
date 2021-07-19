
function isMobile()
{
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function guessDevice()
{
    let pix_width = screen.width;
    let pix_height = screen.height;
    let dpr = window.devicePixelRatio;
    let window_top = window.screenTop;
    let window_left = window.screenLeft;
}

function toggleFullScreen()
{
    let elem = document.querySelector("body");

    if (!document.fullscreenElement)
    {
        elem.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    }
    else
    {
        document.exitFullscreen();
    }
}
