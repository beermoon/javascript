document.addEventListener("DOMContentLoaded", () => {
  const todoList = document.querySelector("#todoList");
  const inputTodo = document.querySelector("#inputTodo");
  const btnAdd = document.querySelector("#btnAdd");

  // ✅ 기존 저장된 할 일 불러오기
  loadTodos();

  // ✅ 할 일 추가 기능
  btnAdd.addEventListener("click", () => {
    const todoValue = inputTodo.value;
    if (todoValue === "") return; // 빈칸 방지

    addTodo(todoValue);
    saveTodos(); // 로컬 스토리지 업데이트
    inputTodo.value = ""; // 입력 필드 초기화
  });

  // ✅ 할 일 추가 함수
  function addTodo(todoValue) {
    const listItem = document.createElement("li");
    listItem.className = "d-flex list-group-item align-items-center";
    listItem.innerHTML = `
            <span class="flex-grow-1">${todoValue}</span>
            <button class="btn btn-sm btn-danger ms-2 delete-btn">삭제</button>
        `;

    todoList.appendChild(listItem);
    attachDeleteEvent(listItem); // 삭제 이벤트 연결
  }

  // ✅ 삭제 버튼 이벤트 연결
  function attachDeleteEvent(listItem) {
    listItem
      .querySelector(".delete-btn")
      .addEventListener("click", function () {
        listItem.remove();
        saveTodos(); // 삭제 후 로컬 스토리지 업데이트
      });
  }

  // ✅ 로컬 스토리지에 저장
  function saveTodos() {
    const todos = Array.from(todoList.children).map(
      (li) => li.querySelector("span").innerText
    ); // null 오류 방지
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // ✅ 로컬 스토리지에서 데이터 불러오기 (null 방지)
  function loadTodos() {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || []; // null이면 빈 배열 반환
    savedTodos.forEach((todo) => addTodo(todo));
  }
});
