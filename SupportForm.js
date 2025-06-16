import { useState } from "react";

export default function SupportForm() {
  const [issue, setIssue] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (issue === "media" && !file) {
      alert("Please upload a file.");
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label>
        What's the issue?
        <select
          id="issue"
          onChange={(e) => setIssue(e.target.value)}
          className="border p-2"
          value={issue}
        >
          <option value="">Select</option>
          <option value="text">Text-only issue</option>
          <option value="media">Issue with media</option>
        </select>
      </label>

      {issue === "media" && (
        <label>
          Upload file:
          <input
            id="file"
            type="file"
            accept="image/*,video/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </label>
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
