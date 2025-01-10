/**
 * Q. 로그인 확인 함수
 *
 * id와 pw를 입력받아, id가 "admin"이고 pw가 "1234"인 경우 "ok"를 반환하고, 그렇지 않은 경우 "fail"을 반환하는 함수를 작성하세요.
 * 단, Promise 사용하여 비동기로 작성하세요.
 *
 * @param {string} id
 * @param {string} pw
 * @returns {Promise<string>} "ok" or "fail"
 */

// TODO: loginRequest 함수를 작성하세요.
// 비동기적 처리 1. settimeout 2. 통신
async function loginRequest(id, pw) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (id === "admin" && pw === "1234") {
        res("ok");
      } else {
        rej("fail");
      }
    }, 1000);
  })


}

// export를 수정하지 마세요.
export { loginRequest };
