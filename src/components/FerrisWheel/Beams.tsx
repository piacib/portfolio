export const Beams = () => {
  return (
    <div className="support flex-center">
      <div className="support-beam support-left">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((x, idx) => (
          <div key={"support" + idx} className="bolt"></div>
        ))}
      </div>
      <div className="support-beam support-right">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((x, idx) => (
          <div key={"support" + idx} className="bolt"></div>
        ))}
      </div>
      <div className="base">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((x, idx) => (
          <div key={"base" + idx} className="bolt"></div>
        ))}
      </div>
    </div>
  );
};
