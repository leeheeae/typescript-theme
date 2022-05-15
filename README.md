# typescript로 theme 설정하기

## Typescript 설치하기

1. 처음 시작할 때 설정

- `npx create-react-app my-app --template typescript`

2. 기존의 프로젝트에서 추가하기

- `npm i --save typescript @types/node @types/react @types/react-dom @types/jest`
- js 파일을 tsx 파일로 변경

## styled-components typescript 설정하기

### 설치하기

- `npm i styled-components`
- `npm i -save-dev @type/styled-components`

### TypeScript와 propTypes의 차이점

- typescript는 코드가 발생하기 전에 오류를 확인 가능
- propTypes는 코드가 발생한 후 콘솔에서 확인 가능

### interface를 이용하여 type 설정

**interface란?**
Object 형태의 type을 설정하여 props에 전달하는 방식

#### 설정한 interface 전달하기

1.  기본 props type에서 전달하기

```typescript
interface CircleProps {
  //props의 type 설정
  bgColor: string;
}

function Circle(props: CircleProps) {
  return <Container />;
}
```

2. styled-components에서 props type 전달하기

```typescript
const Container = styled.div<ContainerProps>``;

interface ContainerProps {
  bgColor: string;
}
```

#### required 형식 변경하기

- interface는 기본적으로 required가 true로 설정되어 있음
- false로 변경하고 싶을 경우 `borderColor?: string` 형식으로 작성 (Optional)
- styled-components는 props는 필수일 경우 기본값을 설정해줘야함
  - <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}/>
