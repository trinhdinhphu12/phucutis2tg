document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("playButton");
    const audioPlayer = document.getElementById("audioPlayer");

    playButton.addEventListener("click", () => {
        audioPlayer.play();
        generateRandomNotifications();
    });

    const lyrics = [
        'Chẳng một ai như anh', 'Biết rõ gu nhạc em thích', 'Tịch tình tang', 
        'Một bài ca trên tông yêu đương Nhưng buồn miên man', 'Ngày hôm ấy nếu em có nhớ', 
        'Hãy vặn volume thật vừa tai', 'Ngồi ngay ngắn anh hát cho em một bài', 
        'Anh à, em với anh cùng xây ngôi nhà Mang cái tên của anh và, anh và em (oh oh)', 
        'Thương một, Để sau mỗi năm niềm thương lên muối Em có anh ở trong đời, anh em, là được rồi', 
        'Mùa xuân đến bình yên cho anh những giấc mơ', 'Hạ lưu giữ ngày mùa ngọt ngào nền thơ', 
        'Mùa thu lá vàng rơi đông sang anh nhớ em Tình yêu bé nhỏ xin dành tặng riêng em', 
        'Dù cho anh trông hơi nghiêm trọng Đừng cười anh, đừng có chê', 
        'Bình thường anh ngân nga rất mượt Sao hôm nay lại run như thế', 
        'Vì khi anh đang đứng trước mặt Người yêu thương đây vấn vương', 
        'Anh vẫn sai vẫn quên vẫn vấp như thường', 'Cầm tay anh dựa vai anh', 
        'Kề bên anh nơi này có anh', 'Khép đôi mi thật lâu', 
        'Nguyện mãi bên cạnh nhau yêu say Như ngày đầu mùa xuân đến bình yên', 
        'Cho anh những giấc mơ', 'Hạ lưu giữ ngày mùa ngọt ngào nền thơ', 
        'Mùa thu lá vàng rơi đông sang anh nhớ em Tình yêu bé nhỏ xin dành tặng riêng em'
    ];

    const icons = [
        '😊', '🎵', '🎶', '🎤', '🎧', '🎼', '🎹', '🎷', '🎺', '🎸', '🥁', '🎻', '📯', 
        '🎙️', '🎚️', '🎛️', '🎤', '🎧', '🎼', '🎹', '🎷', '🎺', '🎸'
    ];

    // Shuffle the icons array to ensure randomness
    icons.sort(() => Math.random() - 0.5);

    // Add icons to the lyrics
    lyrics.forEach((line, index) => {
        lyrics[index] = `${icons[index % icons.length]} ${line}`;
    });

    function generateRandomNotifications() {
        lyrics.forEach((line, index) => {
            setTimeout(() => {
                const notification = document.createElement("div");
                notification.className = "notification";
                notification.innerHTML = `
                    <div class='notification-header'>
                        <button class='minimize-btn'>&#8211;</button>
                        <span style='flex-grow: 1; text-align: center;'>Eiuu ỏii💖</span>
                    </div>
                    <p>${line}</p>
                `;

                notification.style.left = `${Math.random() * (window.innerWidth - 240)}px`;
                notification.style.top = `${Math.random() * (window.innerHeight - 160)}px`;

                document.body.appendChild(notification);
                makeDraggable(notification);
            }, index * 200);
        });
    }

    function makeDraggable(element) {
        let isDragging = false;
        let offsetX, offsetY;

        element.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - element.getBoundingClientRect().left;
            offsetY = e.clientY - element.getBoundingClientRect().top;
            element.style.position = 'absolute';
            element.style.zIndex = 1000;
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                element.style.left = `${e.clientX - offsetX}px`;
                element.style.top = `${e.clientY - offsetY}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }

    document.body.addEventListener("click", (event) => {
        if (event.target.classList.contains("minimize-btn")) {
            event.target.closest('.notification').style.display = 'none';
        }
    });

    const footer = document.createElement("a");
    footer.innerHTML = "©️xPhú";
    document.body.appendChild(footer);
});
