// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts+js+dts"
// @generated from file users/v1/users.proto (package users.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateUserRequest, CreateUserResponse, GetUserRequest, GetUserResponse, UpdateUserRequest, UpdateUserResponse, UsersListRequest, UsersListResponse } from "./users_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * User Managment Service
 *
 * @generated from service users.v1.UsersService
 */
export declare const UsersService: {
  readonly typeName: "users.v1.UsersService",
  readonly methods: {
    /**
     * @generated from rpc users.v1.UsersService.GetUser
     */
    readonly getUser: {
      readonly name: "GetUser",
      readonly I: typeof GetUserRequest,
      readonly O: typeof GetUserResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.UsersService.CreateUser
     */
    readonly createUser: {
      readonly name: "CreateUser",
      readonly I: typeof CreateUserRequest,
      readonly O: typeof CreateUserResponse,
      readonly kind: MethodKind.ClientStreaming,
    },
    /**
     * @generated from rpc users.v1.UsersService.UpdateUser
     */
    readonly updateUser: {
      readonly name: "UpdateUser",
      readonly I: typeof UpdateUserRequest,
      readonly O: typeof UpdateUserResponse,
      readonly kind: MethodKind.ClientStreaming,
    },
    /**
     * @generated from rpc users.v1.UsersService.UsersList
     */
    readonly usersList: {
      readonly name: "UsersList",
      readonly I: typeof UsersListRequest,
      readonly O: typeof UsersListResponse,
      readonly kind: MethodKind.ServerStreaming,
    },
  }
};
