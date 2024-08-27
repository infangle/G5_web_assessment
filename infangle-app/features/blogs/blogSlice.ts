// features/blogs/blogSlice.ts : Defines the Redux slice for blogs, including state, reducers, and actions.

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Author {
  _id: string;
  name: string;
  email: string;
  image: string;
  role: string;
}

interface Blog {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: Author;
  tags: string[];
  likes: number;
  relatedBlogs: any[];
  skills: string[];
  createdAt: string;
  updatedAt: string;
}

interface BlogState {
  blog: Blog | null;
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  blog: null,
  loading: false,
  error: null,
};

// Create an async thunk for fetching the blog data
export const fetchBlog = createAsyncThunk<Blog, string>(
  'blog/fetchBlog',
  async (blogId, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://a2sv-backend.onrender.com/api/blogs/${blogId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlog.fulfilled, (state, action: PayloadAction<Blog>) => {
        state.blog = action.payload;
        state.loading = false;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
        console.error('Error fetching blog:', action.payload);
      });
  },
});

export default blogSlice.reducer;
