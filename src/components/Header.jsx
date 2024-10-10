// Header component

const Header = () => {
  return (<div
    style={{
      display: 'flex', // Flexbox를 사용하여 자식 요소들을 수평으로 배치
      alignItems: 'center', // 자식 요소들을 수직 가운데 정렬
      backgroundColor: '#A60606', // 배경색을 빨간색으로 설정
      padding: '10px', // 상하 좌우에 10px의 패딩 추가
        justifyContent: 'space-between', // 자식 요소 간의 간격을 균등하게
    }}
  >
    
  </div >
  );
};

export default Header;
