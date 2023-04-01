#include<bits/stdc++.h>
using namespace std;

int main(){

    // string ans ="";
    // map<char,int>mp;

    // string res = "aditya";

    // for(auto i: res){
    //     mp[i]++;
    // }

    // for(auto i:mp){
    //     if(i.second == 1)
    //     ans.push_back(i.first);
    //     else if(i.second > 1 && i.second<10)
    //     {
    //         ans.push_back(i.first);
    //         ans.push_back(i.second-1);
    //     }
    //     else if(i.second>=10){
    //         ans.push_back(i.first);
    //         while(i.second >= 10){
    //             ans.push_back(i.second/10);
    //         }
    //     }
    // }

    // cout<<ans;
    int n = 2;
  
    int arr[n] = {1,2};

   
    int k = 1;
 
    int arr2[n];
    int i=k;
    int l=0;
    for( ;i<n; i++)
    arr2[l++] = arr[i];

    for(int j=0; j<k; j++){
        arr2[l++] = arr[j];
    }

    for(int i=0; i<n; i++){
        cout<<arr2[i]<<" ";
    }
}