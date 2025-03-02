# Что такое React hook?

**React Hooks** — это простые функции, которые вызываются в пользовательских компонентах и всегда пишутся с префиксом _use_. Существуют два типа хуков:

1. _Встроенные хуки_ — это хуки, которые изначально встроены в React. Например: _useState_, _useEffect_ и _useRef_.
2. _Пользовательские хуки_ — это хуки, которые создаются пользователем. Их мы разберем в другом посте.

Сейчас мы рассмотрим самые нужные хуки.

## `useState`

`useState` — это хук, который хранит значение в переменной `state` и может изменять его с помощью функции `setState`.

```jsx
const [state, setState] = useState(initialState)
```

### `initialState`

`initialState` — это значение, которое сохраняется в `state` и указывается внутри скобок `useState`. Это значение потом будет изменяться с помощью `setState`.

```jsx
export const MyComponent = () => {
	// Здесь значение count равно 1
	const [count] = useState(1)
}
```

### `state`

`state` — это простая переменная, которая хранит в себе значение хука `useState`. Его можно изменить только с помощью `setState`.

> Вы можете изменить имя `state`. Например: `state` -> `count`

```jsx
export const MyComponent = () => {
	const [count] = useState(1)

	return <h1>Count: {count}</h1>
}
```

### `setState`

`setState` — это функция, которая изменяет значение `state`.

> Вы можете изменить имя `setState`. Например: `setState` -> `setCount`

```jsx
export const MyComponent = () => {
	const [count, setCount] = useState(1)

	return (
		<div>
			<h1>Count: {count}</h1>
			{/* Так НЕЛЬЗЯ делать!! */}
			<button onClick={count++}>add count</button>
			{/* Так МОЖНО делать!! */}
			<button onClick={() => setCount(count + 1)}>add count</button>
		</div>
	)
}
```

### Применение

#### Добавление состояния в компонент

```jsx
export const MyComponent = () => {
	const [count, setCount] = useState(0)

	return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

#### Добавление изменения состояния в компоненте

```jsx
export const MyComponent = () => {
	const [value, setValue] = useState("")

	return (
		<div>
			<input value={value} onChange={e => setValue(e.target.value)} />
			<p>{value}</p>
		</div>
	)
}
```

## `useEffect`

`useEffect` — это хук, который помогает синхронизировать компонент с внешней системой. Все _fetch_, _events_ и др. должны обрабатываться в нем.

```jsx
useEffect(setup, dependencies?)
```

### `setup`

`setup` — это функция, которая запускается при определенных условиях. При добавлении компонента в DOM будет вызываться эта функция. После каждого повторного рендеринга React сначала запускает **функцию очистки** (если вы предоставили ее) со старыми значениями, а затем запускает функцию `setup` с новыми значениями. После того, как ваш компонент будет удален из DOM, React запустит вашу **функцию очистки**.

```jsx
useEffect(() => {
	document.addEventListener("load", () => {
		console.log("load")
	})
})
```

#### Функция очистки

**Функция очистки** — это функция, которая сбрасывает эффект `setup`. Она выполняется при повторном запуске `useEffect`, если зависимости изменились, и используется для освобождения ресурсов, предотвращения утечек памяти и корректного завершения асинхронных операций.

```jsx
useEffect(() => {
	document.addEventListener("load", () => {
		console.log("load")
	})

	// Сбрасываем document.addEventListener
	return () => {
		document.removeEventListener("load", () => {
			console.log("load")
		})
	}
})
```

### `dependencies`

**Необязательный** `dependencies` — это список всех значений, которые были упомянуты в `setup`. Они включают в себя реквизит, состояние и все переменные и функции. Список зависимостей должен иметь постоянное количество элементов и быть написан в строке, как `[dep1, dep2, dep3]`. При изменении любого значения в этом списке `useEffect` будет повторно запускаться с новыми значениями.

```jsx
useEffect(() => {
	// При клике на кнопку добавляется 1 к count
	button.addEventListener("click", () => {
		setCount(count + 1)
	})

	// Сбрасываем button.addEventListener
	return () => {
		button.removeEventListener("click", () => {
			setCount(count + 1)
		})
	}
	// Записываем count как зависимость. При изменении count повторно будет запущен useEffect
}, [count])
```

Если вы не укажите значения в `dependencies`, то `useEffect` будет запускаться **один** раз в начале рендеринга компонента.

```jsx
useEffect(() => {
	console.log("Запуск")
	// Нет значений = запускается один раз в начале рендеринга
}, [])
```

Если вы не укажите `dependencies`, ваш эффект будет повторно запущен после каждого повторного изменения компонента.

```jsx
useEffect(() => {
	setCount(count + 1) // ⚠️ бесконечный ререндер
})
```

```jsx
useEffect(() => {
	fetch(...) // слабая производительность
})
```

Лучше указать `dependencies` для лучшей производительности.

### Применение

#### Работы с API

```jsx
useEffect(() => {
	fetch("...")
		.then(response => response.json())
		.then(data => setData(data))
		.catch(error => console.error("Error fetching data:", error))
}, [])
```

#### Обновление заголовки страницы

```jsx
useEffect(() => {
	document.title = "..."
}, [])
```

#### Обработчики событий (addEventListener)

```jsx
useEffect(() => {
	button.addEventListener("click", () => setCount(count + 1))

	return () => button.removeEventListener("click", () => setCount(count + 1))
}, [count])
```

#### Таймеры (setTimeout, setInterval)

```jsx
useEffect(() => {
	const timer = setInterval(() => {
		console.log("Таймер работает")
	}, 1000)

	return () => clearInterval(timer) // Очистка при размонтировании
})
```

#### Работы с хранилищами (localStorage, sessionStorage)

```jsx
useEffect(() => {
	localStorage.setItem("count", count)
}, [count])
```

### Синтаксис

```jsx
import { useState, useEffect } from "react"

const MyComponent = () => {
	const [data, setData] = useState()

	useEffect(() => {
		fetch("...")
			.then(response => response.json())
			.then(data => setData(data))
			.catch(error => console.error("Error fetching data:", error))
	}, [])

	return (
		<div>
			{data.map(...)}
		</div>
	)
}
```

## `useRef`

```jsx
const ref = useRef(initialValue)
```

`useRef` - это хук, который позволяет ссылаться на значение, которое не нужно для рендеринга. Но на деле его используют по другому. Хук `useRef` позволяет создать ссылку на JSX элемент как `document.querySelector()`. В React нельзя использовать `document.querySelector()` ведь в react не обычный **DOM** а **Virtual DOM**. Вместо `document.querySelector()` используется `useRef`. Мы разберем как использовать этот хук только с JSX элементами.

```jsx
const MyComponent = () => {
	const ref = useRef()

	return <button ref={ref}>button with ref</button>
}
```

### `initialValue`

`initialValue` - это значение, которое вы хотите, чтобы текущее свойство объекта ref было изначально. Это может быть значение любого типа. Этот аргумент игнорируется после первого рендеринга.

```jsx
const ref = useRef(0)
```

Чаще всего используют значение `null`, так как все свойства JSX элемента хранятся в `current`.

```jsx
const ref = useRef(null)
```

### `current`

`current` - это объект, который хранит свойства JSX элемента. К свойствам JSX элемента мы получаем доступ именно с помощью `current`.

```jsx
const MyComponent = () => {
	const ref = useRef(null)

	function handleClick() {
		// current — объект со свойствами элемента
		ref.current.focus()
	}

	return (
		<>
			<input ref={ref} />
			<button onClick={handleClick}>Focus the input</button>
		</>
	)
}
```

### Синтаксис

```jsx
import { useRef } from "react"

const MyComponent = () => {
	// Создание ref
	const ref = useRef(null)

	const handleFocus = () => {
		// При нажатии на кнопку происходит вызов focus() на ref (input)
		ref.current.focus()
	}

	return (
		<div>
	    {/* Определяем ref */}
			<input ref={ref} type="text" placeholder="Focus here" />
			<button onClick={handleFocus}>Focus</button>
		</div>
	)
}
```

Это 3 **React-хука**, которые используются чаще всего.
