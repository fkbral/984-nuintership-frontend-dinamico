const topics = ["HTML", "CSS", "JavaScript", "React", "Clojure"];

const topicsUl = document.querySelector("[data-topics]");
const topicLIs = [];

topics.forEach((topic) => {
  const topicLi = document.createElement("li");
  topicLi.innerText = topic;
  topicsUl.append(topicLi);
  topicLIs.push(topicLi);
  // topicLi.remove();
});

// topicLIs[1].remove();
// topicLIs[1].remove();

const searchText = "React";
const topicToRemove = topicLIs.find(
  (topicLI) => topicLI.innerText === searchText
);

if (topicToRemove) {
  topicToRemove.remove();
}
