<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);

if (!$input) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid JSON payload"]);
    exit;
}

// Database config
$host = '72.60.122.124';
$user = 'u213047959_Divinetouch';
$pass = 'kushagra2004K*';
$db   = 'u213047959_Divinetouch';

// Extracted fields
$name = $input['Name'] ?? 'Unknown';
$email = $input['Email'] ?? 'No Email';
$phone = $input['Phone'] ?? 'Not provided';
$company = $input['Company'] ?? 'Not provided';
$message = $input['Message'] ?? 'No message provided';
$subject = $input['_subject'] ?? 'New Form Submission';

// Process Details (Merging Plan/Scale and Budget)
$details_parts = [];
if (!empty($input['Selected Plan'])) {
    $details_parts[] = "Plan: " . $input['Selected Plan'] . " (" . ($input['Plan Price'] ?? '') . ")";
}
if (!empty($input['Project Scale'])) {
    $details_parts[] = "Scale: " . $input['Project Scale'];
}
if (!empty($input['Estimated Budget'])) {
    $details_parts[] = "Budget: " . $input['Estimated Budget'];
}
$details = implode(" | ", $details_parts);

// 1. Database Insertion
$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "DB Connection failed"]);
    exit;
}

// Create table if not exists
$table_sql = "CREATE TABLE IF NOT EXISTS creptech_responses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(50),
    company VARCHAR(255),
    details TEXT,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
$conn->query($table_sql);

// Prepared insertion
$stmt = $conn->prepare("INSERT INTO creptech_responses (name, email, phone, company, details, message) VALUES (?, ?, ?, ?, ?, ?)");
if ($stmt) {
    $stmt->bind_param("ssssss", $name, $email, $phone, $company, $details, $message);
    $stmt->execute();
    $stmt->close();
}
$conn->close();

// 2. Email Delivery
$to = 'service@creptech.online';
$headers = "From: no-reply@creptech.online\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$emailBody = "
<div style='font-family: inherit; font-size: 16px; color: #333;'>
    <h2 style='color: #007bff; border-bottom: 2px solid #007bff; padding-bottom: 10px;'>$subject</h2>
    <div style='background: #f8f9fa; padding: 20px; border-radius: 10px;'>
        <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
        <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>
        <p><strong>Company:</strong> " . htmlspecialchars($company) . "</p>
        <p><strong>Project Details:</strong> " . htmlspecialchars($details) . "</p>
        <p><strong>Message:</strong></p>
        <div style='padding: 15px; background: white; border: 1px solid #ddd; border-radius: 5px;'>
            " . nl2br(htmlspecialchars($message)) . "
        </div>
    </div>
    <hr style='margin-top: 30px;'>
    <p style='font-size: 12px; color: #777;'>Sent from CrepTech Online Inquiry System. Data has been securely logged to SQL database.</p>
</div>
";

$mailSent = mail($to, $subject, $emailBody, $headers);

echo json_encode(["success" => true, "mail_sent" => $mailSent]);
?>
