const Notfound = () => {
  return (
    <>
    
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=1"
      />
      <meta name="theme-color" content="#111111" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://knife.media/wp-content/themes/knife/assets/images/icon-32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="https://knife.media/wp-content/themes/knife/assets/images/icon-192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://knife.media/wp-content/themes/knife/assets/images/icon-180.png"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n  body,\nh1 {\n  margin: 0;\n}\n.video,\n.wrap {\n  position: relative;\n}\nbody {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  user-select: none;\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  min-height: 25rem;\n  font: 400 16px/1.4 -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\n  color: #fff;\n  background: #000;\n}\nh1 {\n  font-size: 1.875em;\n  font-weight: 400;\n}\np {\n  margin: 1rem 0;\n}\na {\n  color: #2f72e1;\n  border-bottom: 1px solid #2f72e1;\n  text-decoration: none;\n  transition: border 0.25s;\n}\na:hover {\n  border-bottom-color: transparent;\n}\n.wrap {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  box-sizing: border-box;\n  width: 40rem;\n  max-width: 100%;\n}\n.video {\n  display: block;\n  width: 90%;\n  height: auto;\n  margin-left: 10%;\n  z-index: -1;\n}\n.message {\n  display: block;\n  margin-top: -15%;\n  padding: 0 1rem;\n  text-align: left;\n}\n\n@media screen and (max-height: 460px) {\n    body {\n        position: absolute;\n    }\n}\n\n@media screen and (max-width: 479px) {\n  .message {\n    font-size: 0.8125rem;\n  }\n}\n\n@media screen and (max-width: 319px) {\n  h1 {\n    font-size: 1.25rem;\n  }\n  .message {\n    font-size: 0.75rem;\n  }\n}\n',
        }}
      />
      <div className="wrap">
        <video
          className="video"
          poster="https://knife.media/wp-content/themes/knife/assets/images/poster-error.jpg"
          autoPlay=""
          preload=""
          loop=""
          muted=""
        >
          <source
            src="https://knife.media/wp-content/themes/knife/assets/video/video-error.mp4"
            type="video/mp4"
          />
        </video>
        <div className="message">
          <h1>Nothing found</h1>
          <p>
            Better go to the <a href="http://localhost:3000/">main page</a>
            <br /> and read something fresh.
          </p>
        </div>
      </div>
    </>
  );
};

export default Notfound;
