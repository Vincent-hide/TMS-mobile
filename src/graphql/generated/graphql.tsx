import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<User>>>;
  user?: Maybe<User>;
  sessions?: Maybe<Array<Maybe<Session>>>;
  session?: Maybe<User>;
  me?: Maybe<User>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QuerySessionArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  addUser?: Maybe<User>;
  editUser?: Maybe<User>;
  login?: Maybe<LoginResponse>;
  revokeRefreshTokenForUser?: Maybe<Scalars['Boolean']>;
  logout?: Maybe<Scalars['Boolean']>;
};


export type MutationAddUserArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  dateOfBirth?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};


export type MutationEditUserArgs = {
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRevokeRefreshTokenForUserArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  dateOfBirth?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['String']>;
};

export type Subject = {
  __typename?: 'Subject';
  name: Scalars['String'];
  level: Scalars['String'];
};

export type Session = {
  __typename?: 'Session';
  id: Scalars['ID'];
  tutor: User;
  date: Scalars['String'];
  time: Scalars['String'];
  location: Scalars['String'];
  subjects?: Maybe<Array<Maybe<Subject>>>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String'];
  user?: Maybe<User>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
  )> }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email' | 'username' | 'dateOfBirth' | 'active' | 'role'>
  )> }
);

export type SessionsQueryVariables = Exact<{ [key: string]: never; }>;


export type SessionsQuery = (
  { __typename?: 'Query' }
  & { sessions?: Maybe<Array<Maybe<(
    { __typename?: 'Session' }
    & Pick<Session, 'id' | 'date' | 'time' | 'location'>
    & { subjects?: Maybe<Array<Maybe<(
      { __typename?: 'Subject' }
      & Pick<Subject, 'name' | 'level'>
    )>>> }
  )>>> }
);


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    firstName
    lastName
    email
    username
    dateOfBirth
    active
    role
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const SessionsDocument = gql`
    query sessions {
  sessions {
    id
    date
    time
    location
    subjects {
      name
      level
    }
  }
}
    `;

/**
 * __useSessionsQuery__
 *
 * To run a query within a React component, call `useSessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSessionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSessionsQuery(baseOptions?: Apollo.QueryHookOptions<SessionsQuery, SessionsQueryVariables>) {
        return Apollo.useQuery<SessionsQuery, SessionsQueryVariables>(SessionsDocument, baseOptions);
      }
export function useSessionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SessionsQuery, SessionsQueryVariables>) {
          return Apollo.useLazyQuery<SessionsQuery, SessionsQueryVariables>(SessionsDocument, baseOptions);
        }
export type SessionsQueryHookResult = ReturnType<typeof useSessionsQuery>;
export type SessionsLazyQueryHookResult = ReturnType<typeof useSessionsLazyQuery>;
export type SessionsQueryResult = Apollo.QueryResult<SessionsQuery, SessionsQueryVariables>;