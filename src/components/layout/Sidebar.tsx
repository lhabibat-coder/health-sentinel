export default function Sidebar() {
  return (
    <aside
      style={{
        width: "260px",
        background: "var(--card)",
        padding: "25px",
        borderRight: "1px solid #334155",
        minHeight: "100vh",
      }}
    >
      <h3
        style={{
          color: "var(--primary)",
          marginBottom: "25px",
        }}
      >
        Navigation
      </h3>

      <nav>
        <MenuItem icon="🏠" title="Dashboard" active />
        <MenuItem icon="🚨" title="Alerts" />
        <MenuItem icon="📰" title="Claims" />
        <MenuItem icon="🗺️" title="Risk Map" />
        <MenuItem icon="📊" title="Analytics" />
        <MenuItem icon="⚙️" title="Settings" />
      </nav>
    </aside>
  );
}

type MenuItemProps = {
  icon: string;
  title: string;
  active?: boolean;
};

function MenuItem({
  icon,
  title,
  active = false,
}: MenuItemProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "14px",
        borderRadius: "10px",
        marginBottom: "10px",
        cursor: "pointer",
        background: active ? "var(--primary)" : "transparent",
        color: active ? "#04130E" : "var(--text)",
        fontWeight: active ? "bold" : "normal",
      }}
    >
      <span>{icon}</span>

      <span>{title}</span>
    </div>
  );
}