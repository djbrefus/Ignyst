function mockLogin() {
  alert("✅ Logged in (mock)");
}
function mockSignup() {
  alert("✅ Signed up (mock)");
}
function mockGetEvents() {
  return [
    { id: "1", name: "VR Launch Party", date: "2025-09-01" },
    { id: "2", name: "Neos World Meetup", date: "2025-09-05" }
  ];
}
function mockCheckWhitelist(eventId) {
  if (eventId === "1") {
    alert("✅ Access granted (VIP)");
  } else {
    alert("❌ Access denied");
  }
}
