export default function SummaryPanel() {
  return (
    <div
      style={{
        background: "#1E293B",
        marginTop: "30px",
        padding: "25px",
        borderRadius: "12px",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          color: "#10B981",
        }}
      >
        Executive Intelligence Summary
      </h2>

      <p
        style={{
          color: "#CBD5E1",
          lineHeight: "1.8",
        }}
      >
        Lead poisoning misinformation is currently classified as
        <strong style={{ color: "#EF4444" }}> HIGH RISK</strong>.
        Discussions are increasing across digital platforms, with
        cosmetics, contaminated spices, and environmental exposure
        emerging as the dominant narratives.
      </p>
    </div>
  );
}