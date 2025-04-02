document.addEventListener('DOMContentLoaded', function() {
  // '친구 요청' 버튼 클릭 이벤트 추가
  const friendRequestButtons = document.querySelectorAll('.friend-request-btn');

  friendRequestButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      alert('친구 요청이 전송되었습니다!');
    });
  });
});