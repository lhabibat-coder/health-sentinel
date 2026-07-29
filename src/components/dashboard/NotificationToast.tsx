type NotificationToastProps = {
  visible: boolean;
};

export default function NotificationToast({
  visible,
}: NotificationToastProps) {
  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "25px",
        right: "25px",
        background: "#1E293B",
        color: "white",
        padding: "18px",
        borderRadius: "12px",
        borderLeft: "6px solid #10B981",
        boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
        width: "320px",
        zIndex: 999,
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: "8px",
        }}
      >
        🔔 Intelligence Update
      </h3>

      <p
        style={{
          margin: 0,
          color: "#CBD5E1",
        }}
      >
        New surveillance data has been processed.
      </p>

      <small
        style={{
          color: "#94A3B8",
        }}
      >
        Dashboard successfully refreshed.
      </small>
    </div>
  );
}