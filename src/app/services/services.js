export async function getHighLights() {
  try {
    const res = await fetch(`https://web-dev.dev.kimo.ai/v1/highlights`);

    const data = await res.json();

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategories() {
  try {
    const res = await fetch(`https://web-dev.dev.kimo.ai/v1/categories`);

    const data = await res.json();

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getActivities(query = "") {
  try {
    const res = await fetch(
      `https://web-dev.dev.kimo.ai/v1/activities/${query}`,
      { mode: "no-cors" }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return data;
  } catch (error) {
    console.log(error);
  }
}
