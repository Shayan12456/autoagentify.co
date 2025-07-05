const FramerEmbed = () => {
  return (
    <div style={styles.container}>
      <iframe
        src="https://easier-researchers-801580.framer.app/"
        title="Framer Embed"
        style={styles.iframe}
        scrolling="yes"
      />
    </div>
  );
};

const styles = {
  container: {
    margin: 0,
    padding: 0,
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    position: "relative",
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    border: "none",
    width: "100vw",
    height: "100vh",
  },
};

export default FramerEmbed;
