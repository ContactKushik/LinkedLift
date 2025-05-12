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

  // Rewrite button container
  const btnContainer = document.createElement("div");
  btnContainer.style.position = "relative";
  btnContainer.style.width = "100%";

  // Animation GIF container
  const animationContainer = document.createElement("div");
  animationContainer.style.width = "24px";
  animationContainer.style.height = "24px";
  animationContainer.style.marginRight = "5px";
  animationContainer.style.display = "flex";
  animationContainer.style.alignItems = "center";
  animationContainer.style.justifyContent = "center";

  const animationImg = document.createElement("img");
  // Convert Google Drive link to direct image URL
  animationImg.src = `https://raw.githubusercontent.com/ContactKushik/LinkedLift-/refs/heads/main/public/animation.gif`;
  animationImg.style.width = "30px";
  animationImg.style.height = "30px";
  animationImg.style.objectFit = "cover";

  animationContainer.appendChild(animationImg);

  // Rewrite button
  const btn = document.createElement("button");
  btn.id = "rewrite-with-ai-btn";
  btn.style.cssText = `
      width: 100%;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border: none;
      background: #08011D;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
      color: #fff;
      position: relative;
      z-index: 2;
      padding: 0 5px;
      overflow: hidden;
      font-weight: 700;
    `;

  // Clear the text content and create a layout for the button
  const btnContent = document.createElement("div");
  btnContent.style.display = "flex";
  btnContent.style.alignItems = "center";
  btnContent.style.width = "100%";

  // Text element
  const btnText = document.createElement("span");
  btnText.innerText = "Rewrite with AI";
  btnText.style.flexGrow = "1";
  btnText.style.textAlign = "center";

  // Rewrite click logic
  btn.addEventListener("click", async () => {
    const text = postBox.innerText.trim();
    const tone = select.value;

    if (!text) {
      return alert("✍️ Please write something in the post box first.");
    }

    btnText.innerText = "Rewriting…";
    btn.disabled = true;

    try {
      //   const res = await fetch("http://localhost:3000/api/rewrite", { // for local testing
      const res = await fetch("https://linked-lift.vercel.app/api/rewrite", {
        //for production
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
      btnText.innerText = "Rewrite with AI";
      btn.disabled = false;
    }
  });

  btnContent.appendChild(animationContainer);
  btnContent.appendChild(btnText);
  btn.appendChild(btnContent);
  container.appendChild(select);
  container.appendChild(btn);
  li.appendChild(container);
  toolbarList.appendChild(li);
}

// Inject and observe DOM changes
const obs = new MutationObserver(initRewriteButton);
obs.observe(document.body, { childList: true, subtree: true });

initRewriteButton();
