function guessDevice()
{
    let pix_width = screen.width;
    let pix_height = screen.height;
    let dpr = window.devicePixelRatio;
    // Actual device pixels!
    let dpix_width = pix_width * dpr;
    let dpix_height = pix_height * dpr;
    let style = getComputedStyle(document.getElementById('detect'));
    // Use 1cm div to get css pix per cm.
    let pix_per_cm_horiz = style.width.substring(0, style.width.length-2); // Remove px at end.
    let pix_per_cm_vert  = style.height.substring(0, style.height.length-2); // Remove px at end.
    // Now calculate actual device pixels per cm and inches.
    let screen_width_cm = Math.round(10*pix_width/pix_per_cm_horiz)/10;
    let screen_height_cm = Math.round(10*pix_height/pix_per_cm_vert)/10;
    let screen_width_inch = Math.round(10*screen_width_cm/2.54)/10;
    let screen_height_inch = Math.round(10*screen_height_cm/2.54)/10;
    let screen_diag_inch = Math.round(10*Math.sqrt(screen_width_inch*screen_width_inch+
                                                   screen_height_inch*screen_height_inch))/10;

    let window_width_cm = Math.round(10*window.innerWidth/pix_per_cm_horiz)/10;
    let window_height_cm = Math.round(10*window.innerHeight/pix_per_cm_vert)/10;
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
