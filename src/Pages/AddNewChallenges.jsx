import React, { use, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";

const AddNewChallenges = () => {
  const { user } = use(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    duration: "",
    participants: "",
    imageUrl: "",
    startDate: "",
    endDate: "",
    impactMetric: { value: "", unit: "" },
    created_by: user.email,
  });

  const [loading, setLoading] = useState(false);

  const categories = [
    "Waste Reduction",
    "Energy Conservation",
    "Water Conservation",
    "Sustainable Transport",
    "Green Living",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "impactValue" || name === "impactUnit") {
      setFormData((prev) => ({
        ...prev,
        impactMetric: {
          ...prev.impactMetric,
          value: name === "impactValue" ? value : prev.impactMetric.value,
          unit: name === "impactUnit" ? value : prev.impactMetric.unit,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.title || !formData.description || !formData.category) {
      toast.error("❌ Title, Description and Category are required");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        ...formData,
        duration: parseInt(formData.duration) || 0,
        participants: parseInt(formData.participants) || 0,
        impactMetric: {
          value: parseFloat(formData.impactMetric.value) || 0,
          unit: formData.impactMetric.unit,
        },
      };

      const res = await fetch(
        "https://eco-track-server-pied.vercel.app/challenges-add",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success("✅ Challenge added successfully!");
        setFormData({
          title: "",
          description: "",
          category: "",
          duration: "",
          participants: "",
          imageUrl: "",
          startDate: "",
          endDate: "",
          impactMetric: { value: "", unit: "" },
        });
      } else {
        toast.error(`❌ ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to add challenge");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-green-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl">
        <h1 className="text-3xl font-extrabold text-green-900 mb-8 text-center">
          Add New Challenge
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="input input-bordered w-full"
            required
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            required
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <div className="flex gap-4">
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Duration (days)"
              className="input input-bordered w-1/2"
              required
            />
            <input
              type="number"
              name="participants"
              value={formData.participants}
              onChange={handleChange}
              placeholder="Participants"
              className="input input-bordered w-1/2"
              required
            />
          </div>

          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            className="input input-bordered w-full"
            required
          />

          <div className="flex gap-4">
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="input input-bordered w-1/2"
              required
            />
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="input input-bordered w-1/2"
              required
            />
          </div>

          <div className="flex gap-4">
            <input
              type="number"
              name="impactValue"
              value={formData.impactMetric.value}
              onChange={handleChange}
              placeholder="Impact Value"
              className="input input-bordered w-1/2"
              required
            />
            <input
              type="text"
              name="impactUnit"
              value={formData.impactMetric.unit}
              onChange={handleChange}
              placeholder="Impact Unit"
              className="input input-bordered w-1/2"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn bg-green-500 hover:bg-green-600 text-white font-semibold mt-4"
          >
            {loading ? "Adding..." : "Add Challenge"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddNewChallenges;
