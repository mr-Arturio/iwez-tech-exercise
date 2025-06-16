import { useState } from "react";

export default function SupportForm() {
  const [issue, setIssue] = useState("");
  const [file, setFile] = useState<File | null>(null);

  return (
    <form className="space-y-4">
      <label>
        What's the issue?
        <select
          onChange={(e) => setIssue(e.target.value)}
          className="border p-2"
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
            type="file"
            accept="image/*,video/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </label>
      )}
    </form>
  );
}