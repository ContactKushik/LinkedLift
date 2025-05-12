function initRewriteButton() {
  const postBox = document.querySelector('[role="textbox"]');
  if (!postBox) return;

  const toolbarList = document.querySelector("ul.artdeco-carousel__slider");
  if (!toolbarList) return;

  if (toolbarList.querySelector("#rewrite-li")) return;

  // Create LI container
  const li = document.createElement("li");
  li.id = "rewrite-li";
  li.className = "artdeco-carousel__item ember-view";
  li.style.width = "140px"; // enough space for button + dropdown

  const container = document.createElement("div");
  container.className = "artdeco-carousel__item-container";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center";
  container.style.justifyContent = "center";

  // Tone dropdown
  const select = document.createElement("select");
  select.id = "tone-selector";
  select.style.marginBottom = "4px";
  select.style.width = "100%";
  select.style.fontSize = "12px";

  const tones = ["Friendly", "Professional", "Bold"];
  tones.forEach((tone) => {
    const option = document.createElement("option");
    option.value = tone.toLowerCase();
    option.innerText = tone;
    select.appendChild(option);
  });

  // Rewrite button
  const btn = document.createElement("button");
  btn.id = "rewrite-with-ai-btn";
  btn.innerText = "Rewrite with AI";
  btn.style.cssText = `
      width: 100%;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: #f3f2ef;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
      color: #000;
    `;

  // Rewrite click logic
  btn.addEventListener("click", async () => {
    const text = postBox.innerText.trim();
    const tone = select.value;

    if (!text) {
      return alert("✍️ Please write something in the post box first.");
    }

    btn.innerText = "Rewriting…";
    btn.disabled = true;

    try {
    //   const res = await fetch("http://localhost:3000/api/rewrite", { // for local testing
        const res = await fetch("https://linked-lift.vercel.app/api/rewrite", { //for production
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ input: text, tone }),
        });

      const { rewritten } = await res.json();
      if (rewritten) {
        postBox.innerText = rewritten;
      } else {
        alert("⚠️ Rewrite failed.");
      }
    } catch (e) {
      console.error(e);
      alert("⚠️ Network error.");
    } finally {
      btn.innerText = "Rewrite with AI";
      btn.disabled = false;
    }
  });

  container.appendChild(select);
  container.appendChild(btn);
  li.appendChild(container);
  toolbarList.appendChild(li);
}

// Inject and observe DOM changes
const obs = new MutationObserver(initRewriteButton);
obs.observe(document.body, { childList: true, subtree: true });

initRewriteButton();
