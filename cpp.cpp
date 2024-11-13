// #include<bits/stdc++.h>
// using namespace std;

// vector<int> mergeArrays(const vector<int>& arr1, const vector<int>& arr2) 
// {
//     vector<int> merged;
//     int i = 0, j = 0;
    
//     while (i < arr1.size() && j < arr2.size()) 
//     {
//         if (arr1[i] <= arr2[j]) 
//         {
//             merged.push_back(arr1[i++]);
//         } 
//         else 
//         {
//             merged.push_back(arr2[j++]);
//         }
//     }
//     while (i < arr1.size())
//     {
//         merged.push_back(arr1[i++]);
//     }
//     while (j < arr2.size()) 
//     {
//         merged.push_back(arr2[j++]);
//     }
//     return merged;
// }
// vector<int> removeDuplicates(const vector<int>& arr) 
// {
//     vector<int> result;
//     unordered_set<int> seen;
    
//     for (int num : arr) 
//     {
//         if (seen.insert(num).second) 
//         {
//             result.push_back(num);
//         }
//     }
//     return result;
// }
// void processArrays(vector<int>& arr1, vector<int>& arr2, vector<int>& arr3) 
// {
//     vector<int> uniqueArr1 = removeDuplicates(arr1);
//     vector<int> uniqueArr2 = removeDuplicates(arr2);
//     vector<int> uniqueArr3 = removeDuplicates(arr3);

//     vector<int> merged1 = mergeArrays(uniqueArr1, uniqueArr2);
//     vector<int> finalMerged = mergeArrays(merged1, uniqueArr3);

//     cout << "Here is the result of merging and removing duplicates from the arrays:\n";
//     for (int num : finalMerged) 
//     {
//         cout << num << " ";
//     }
//     cout <<"\n";
// }
// int main()
// {
//     vector<int> arr1 = {1, 2, 2, 2, 2, 4, 4, 4, 56, 56};
//     vector<int> arr2 = {5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 21, 21, 33, 33, 34, 100};
//     vector<int> arr3 = {12, 16, 17, 19, 25, 29, 29, 29, 36};

//     processArrays(arr1, arr2, arr3);
// }


#include <bits/stdc++.h>
using namespace std;
int main()
{
    vector<vector<string>>data=
    {
        {"Red","Small"},
        {"Blue","Medium"},
        {"Green","Large"},
        {"Blue","Small"},
        {"Red","Large"}
    };
    map<string,int>colormapping=
    {
        {"Red",0},
        {"Blue",1},
        {"Green",2}
    };
    map<string,int>sizemapping=
    {
        {"Small",0},
        {"Medium",1},
        {"Large",2}
    };
    vector<vector<int>>encodeddata;
    for (auto v1:data) 
    {
        int colour_code = colormapping[v1[0]];
        int size_code = sizemapping[v1[1]];
        encodeddata.push_back({colour_code, size_code});
    }
    cout << "Encoded Data (Color and Size Mapped to Integers):\n";
    cout << "-----------------------------------------------------\n";
    cout << "Color (Name) | Color Code | Size (Name) | Size Code\n";
    cout << "-----------------------------------------------------\n";
    for (auto v1 : encodeddata) 
    {
        string color_name=(v1[0]==0)?"Red":(v1[0]==1)?"Blue" : "Green";
        string size_name=(v1[1]==0)?"Small":(v1[1]==1)?"Medium" : "Large";
        cout<<"   "<<color_name<<"   |     "<<v1[0]<<"      |   "<<size_name<<"   |     "<<v1[1]<<"\n";
    }
    cout << "-----------------------------------------------------\n";
    return 0;
}