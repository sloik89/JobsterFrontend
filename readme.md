## How to setup React redux?

```js
import { Provider } from "react-redux";
import { store } from "./store.jsx";
<Provider store={store}>
  <App />
</Provider>;
```

## How to create store in react redux?

```js
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    job: JobsSlice,
    allJobs: allJobsSlice,
  },
});
```

## How to create slice in react redux?

```js
import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit";
```

### Default slice without extra reducers

```js
const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  isDropdown: false,
  user: getUserFromLocalStorage(),
};
```

```js
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});
```

### How to export slice from redux?

```js
export default userSlice.reducer;
```

### Slice with extra reducers

```js
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        toast.success(`Hello There ${user.name}`);
        addUserToLocalStorage(user);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});
```

- createAyncThunk is helping to create async request

## How to create async request in react redux?

```js
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const res = await axios.post("/api/auth/register", user);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.msg);
      console.log(err);
    }
  }
);
```

### How to export reducer function from slice?

```js
export const { toggleSidebar, toggleDropdown, logoutUser } = userSlice.actions;
```

### How to navigate to diffrent page after 2 seconds if user present?

```js
const navigate = useNavigate();
useEffect(() => {
  if (user) {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }
}, [navigate, user]);
```

### How to get values from slice in components?

```js
import { useDispatch, useSelector } from "react-redux";
const { user, isLoading } = useSelector((store) => store.user);
```

### How to trigger actions (function) in components?

```js
import { useDispatch, useSelector } from "react-redux";
const dispatch = useDispatch();
dispatch(loginUser({ email: email, password: password }));
```

### How to setup Protected Route?

```js
const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};
```

### How to create Shared Layots?

    In App.js routes

```js
<Routes>
  <Route
    path="/"
    element={
      <ProtectedRoute>
        <SharedLayouts />
      </ProtectedRoute>
    }
  >
    <Route index element={<Stats />} />
    <Route path="all-jobs" element={<AllJobs />} />
    <Route path="add-jobs" element={<AddJobs />} />
    <Route path="profile" element={<Profile />} />
  </Route>
  <Route path="landing" element={<Landing />} />
  <Route path="register" element={<Register />} />
  <Route path="*" element={<Error />} />
</Routes>
```

SharedLayots.js file looks

```js
const SharedLayouts = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
```

### How to get state using thunkApi?

Get token

```js
thunkAPI.getState().user.user.token;
```

## Using shared layots

- setting up shared layouts
- index means default page

```js
<Route path="/" element={<SharedLayouts />}>
  <Route index element={<Stats />} />
  <Route path="all-jobs" element={<AllJobs />} />
  <Route path="add-jobs" element={<AddJobs />} />
  <Route path="profile" element={<Profile />} />
</Route>
```

- Outlet
- Outlet refers to Profile, AllJobs, AddJobs

```js
const SharedLayouts = () => {
 return (
   <Wrapper>
     <main className="dashboard">
       <SmallSidebar />
       <BigSidebar />
       <div>
         <Navbar />
         <div className="dashboard-page">
           <Outlet />
         </div>
       </div>
     </main>
   </Wrapper>
 );
```

### What is thunkApi?

- thunkApi gives us access to the state `thunkApi.getState()`
- also we can dispatch action `thunkApi.dispatch(openModal)`
- we can pass down values with `thunkApi.rejectWithValue('something went wrong')`

### Refactor slice

- move async function to jobsThunk

```js
import { jobUpdateThunk, createJobThunk, deleteJobThunk } from "./jobsThunk";
export const createJob = createAsyncThunk("job/createJob", createJobThunk);
```

### Test user

- email: testUser@test.com
- pswd: secret
