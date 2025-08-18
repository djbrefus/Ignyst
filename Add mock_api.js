// Mock API for Ignyst frontend testing

// Simulate login
function mockLogin(email, password) {
  if (!email || !password) {
    alert("❌ Please enter both email and password");
    return;
  }
  alert(`✅ Logged in (mock)\nEmail: ${email}`);
  console.log("Login submitted:", { email, password });
}

// Simulate signup
function mockSignup(email, password) {
  if (!email || !password) {
    alert("❌ Please enter both email and password");
    return;
  }
  alert(`✅ Signed up (mock)\nEmail: ${email}`);
  console.log("Signup submitted:", { email, password });
}

// Return a list of mock events
function mockGetEvents() {
  const events = [
    { id: "1", name: "VR Launch Party", date: "2025-09-01" },
    { id: "2", name: "Neos World Meetup", date: "2025-09-05" }
  ];
  console.log("Events fetched:", events);
  return events;
}

// Check whitelist access for a given event
function mockCheckWhitelist(eventId) {
  if (eventId === "1") {
    alert("✅ Access granted (VIP)");
    console.log(`Whitelist check: Event ${eventId} - Access granted`);
  } else {
    alert("❌ Access denied");
    console.log(`Whitelist check: Event ${eventId} - Access denied`);
  }
}
