import Typography from "./Typography";

const AppTitle = (props) => {
  return (
    <Typography
      fontWeight="300"
      fontFamily="var(--fractul-regular)"
      as="h2"
      color="white"
      whiteSpace="nowrap"
      {...props}
    >
      Āut{" "}
      <strong
        style={{
          fontFamily: "var(--fractul-alt-bold)",
        }}
      >
        Leaderboard
      </strong>
    </Typography>
  );
};

export default AppTitle;
