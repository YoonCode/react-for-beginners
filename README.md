# react-for-beginners

## The basic of React
- JS 구문을 JSX 구문으로 변환하는 방법 이해
- JSX 구문을 Babel을 통해 JS 구문으로 변환하는 방법 이해
- 컴포넌트를 다른 컴포넌트 안에 넣는 방법 이해
1. 요소를 function component로 변환할 것
2. component명은 대문자로 시작할 것
3. <Component /> 형식으로 불러올 것

## useState
- useState가 어떤 문제를 해결해주는지 이해
1. 데이터가 바뀔 때마다 컴포넌트를 re-render하면서 UI를 refresh
2. re-render 한다는 것은 컴포넌트를 재생성한다는 것
3. 다만, 전체를 refresh 하는 것이 아니라 바뀐 데이터만 refresh
- props를 이용해서 재사용 가능한 컴포넌트를 만들기
1. props로 전달되는 함수와 event listener를 구분하는 것이 중요
2. memo를 사용해서 값이 바뀐 컴포넌트만 re-render해서 랜더링 시간을 줄일 수 있음